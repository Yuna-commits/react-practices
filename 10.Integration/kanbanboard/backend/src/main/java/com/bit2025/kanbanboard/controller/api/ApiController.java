package com.bit2025.kanbanboard.controller.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<CardVo>>> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}

	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<TaskVo>>> readTask(Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult<TaskVo>> createTask(@RequestBody TaskVo taskVo) {
		taskRepository.insert(taskVo);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<String, Object>>> updateTask(@PathVariable("no") Long no, String done) {
		taskRepository.updateDone(no, done);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(new HashMap<String, Object>() {
					{
						put("no", no);
						put("done", done);
					}
				}));
	}

}
