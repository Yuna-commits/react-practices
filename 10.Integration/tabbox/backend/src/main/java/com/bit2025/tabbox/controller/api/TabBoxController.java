package com.bit2025.tabbox.controller.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit2025.tabbox.dto.JsonResult;

@RestController
@RequestMapping("/api")
public class TabBoxController {

	@GetMapping
	public ResponseEntity<JsonResult<String>> hello() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success("OK"));
	}
	
}
