package com.bit2025.ajax.controller.api;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bit2025.ajax.domain.Item;
import com.bit2025.ajax.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

/**
 * React <-> Spring 간 비동기 통신 컨트롤러
 */
@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	
	private final List<Item> items;
	
	// @Qaulifier : "items"란 이름의 객체 식별
	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}
	
	// 프론트에서 받은 아이템을 목록에 저장하기
	@PostMapping(consumes= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request [POST /item, Content-Type: application/json][{}]", item);
		
		// 정렬된 목록으로 가정
		Long maxId = items.isEmpty() ? 0L : items.getFirst().getId();
		item.setId(maxId + 1);
		
		// 아이템 등록
		items.addFirst(item);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}
	
	// 이미지가 포함된 아이템을 목록에 저장하기
	@PostMapping(consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file) {
		log.info("Request[POST /item, Content-Type: multipart/form-data][{}, {}]", item, file.getOriginalFilename());

		try {
			final String filename = UUID.randomUUID().toString() // 고유 식별자 생성
					.concat(file.getOriginalFilename() // 확장자만 추출
							.substring(file.getOriginalFilename().lastIndexOf(".")));
			
			// 업로드 저장소 생성, 저장
			Files.write(Files.createDirectories(Paths.get("/ajax-practices-uploads/images"))
						.resolve(filename), file.getBytes());

			// 정렬된 목록으로 가정
			Long maxId = items.isEmpty() ? 0L : items.getFirst().getId();
			item.setId(maxId + 1);
			item.setImage("/assets/images/" + filename);

			// 아이템 등록
			items.addFirst(item);

			return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(item));
		} catch (IOException ex) {
			throw new RuntimeException(ex);
		}
	}
	
	// 프론트로 아이템 목록 보내기
	// ResponseEntity : HTTP 상태 코드, 응답 본문 제어하기 위해 사용
	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request [GET /item]");
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items));
	}
	
	// 프론트가 보낸 id에 대응하는 아이템 정보 보내기
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
		log.info("Request [GET /item/{}]", id);
		
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(
					items.stream()
						 .filter(item -> item.getId() == id)
						 .findAny().orElse(null)));
	}
	
	// 프론트가 보낸 id에 해당하는 아이템 수정하기
	@PutMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> update(@PathVariable Long id, Item item) {
		log.info("Request[put /item/{}][{}]", id, item);
		
		// 같은 id를 가진 item 위치 찾기(없으면 -1)
		int index = items.indexOf(new Item(id));

		Item updateItem = index == -1 ? null : items.get(index);
		
		if (updateItem != null) {
			updateItem.setType(item.getType());
			updateItem.setName(item.getName());
		}
		
		// Optional.of(null); // value : null
		// Optional.ofNullable(...) // value : null일 수 있는 값
		
		/*
		Optional.ofNullable(items.indexOf(new Item(id)) == -1 ? null : items.get(index))
				.ifPresent((t) -> {
					t.setType(item.getType());
					t.setName(item.getName());
				});
		*/ 

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(updateItem));
	}
	
	// 프론트가 보낸 id에 해당하는 아이템 삭제하기
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Boolean>> delete(@PathVariable Long id) {
		log.info("Request [DELETE /item/{}", id);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(
						// id가 같은 아이템 삭제
						items.removeIf((item) -> item.getId() == id)));
	}
	
}