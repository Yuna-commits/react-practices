package com.bit2025.kanbanboard.controller.api;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit2025.kanbanboard.dto.JsonResult;
import com.bit2025.kanbanboard.repository.CardRepository;
import com.bit2025.kanbanboard.repository.TaskRepository;
import com.bit2025.kanbanboard.vo.CardVo;
import com.bit2025.kanbanboard.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private TaskRepository taskRepository;
	
	// DB에 저장된 Card 목록 전송
	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<CardVo>>> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(
						cardRepository.findAll()));
	}

	// cardNo에 대응하는 Task 목록 전송
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<TaskVo>>> readTask(Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(
						taskRepository.findAllByCardNo(cardNo)));
	}
	
	// DB에 전송받은 Task 정보 저장
	@PostMapping("/task")
	public ResponseEntity<JsonResult<TaskVo>> createTask(@RequestBody TaskVo taskVo) {
		taskRepository.insert(taskVo);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	// DB에 전송받은 taskNo에 해당하는 Task 상태(done={Y, N}) 정보 저장
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Boolean>> updateTask(@PathVariable("no") Long taskNo, String done) {
		Boolean result = taskRepository.updateDone(taskNo, done);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(result));
	}
	
	// DB에서 전송 받은 taskNo에 해당하는 Task 정보 삭제 -> 삭제 후 나머지로 다시 렌더링!
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Boolean>> deleteTask(@PathVariable("no") Long taskNo) {
		Boolean result = taskRepository.deleteByNo(taskNo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(result));
	}
	
}
