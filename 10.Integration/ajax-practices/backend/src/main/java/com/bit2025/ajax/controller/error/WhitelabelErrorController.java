package com.bit2025.ajax.controller.error;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit2025.ajax.dto.JsonResult;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;

/**
 * /error/** 경로 처리 사용자 정의 에러 엔드포인트 GlobalExceptionHandler가 보낸 에러 처리
 */
@RestController
@RequestMapping("/error")
public class WhitelabelErrorController implements ErrorController {
	/**
	 * from GlobalExceptionHandler
	 */
	// 매핑되지 않은 URL 처리
	@GetMapping("/404")
	public ResponseEntity<JsonResult<?>> _404() {
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(JsonResult.fail("Unknown URL"));
	}

	// 컨트롤러 내부 예외 처리
	@GetMapping("/500")
	public ResponseEntity<JsonResult<?>> _500(@RequestAttribute String errors) {
		return ResponseEntity
				.internalServerError()
				.body(JsonResult.fail(errors));
	}

	/**
	 * from Whitelabel(Embeded Tocat이 발생시킨 에러 처리)
	 * - 톰캣은 HTTP 상태 코드 오류, ServletException, IOException 등의 에러가 발생하면 /error 경로로 포워드
	 * - /error 를 직접 구현하여 handlerError() 메서드가 대신 호출
	 */
	@GetMapping
	public ResponseEntity<JsonResult<?>> handlerError(HttpServletRequest request) {
		Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		Object message = request.getAttribute(RequestDispatcher.ERROR_MESSAGE);

		return ResponseEntity
				.status(status == null ? 
						HttpStatus.INTERNAL_SERVER_ERROR.value() 
						: Integer.parseInt(status.toString()))
				.body(JsonResult.fail(message == null ? "Unexpected Error" : message.toString()));
	}

}
