package com.bit2025.ajax.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit2025.ajax.domain.Item;
import com.bit2025.ajax.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	
	private final List<Item> items;

	// @Qualifier : 주입받을 객체의 이름을 명시
	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}

	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /item]");

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items));
	}

}
