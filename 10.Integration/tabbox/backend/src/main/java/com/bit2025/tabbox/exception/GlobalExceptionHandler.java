package com.bit2025.tabbox.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

/**
 * @ControllerAdive : 모든 컨트롤러에서 발생한 예외를 전역적으로 처리
 * 
 * DispatcherServlet 내부에서 발생한 예외 중 컨트롤러 단까지 도달한 예외를 처리
 * - 애플리케이션 전역에서 발생하는 예외를 한 곳에서 일관되게 처리(JSON)하는 역할
 * - 그렇지 않으면 다른 형식의 각종 예외를 처리해야 함, 클라이언트의 기대 응답과 불일치 가능성 o
 */
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

	// api 요청 시 에러
	@ExceptionHandler(NoHandlerFoundException.class)
	public String handlerNoHandlerFoundException(HttpServletRequest request) {
		/**
		 * html(landing)과 json(api) 요청 구분 필요
		 * - 분리하는 편이 좋음
		 */
		return request.getHeader("accept").matches(".*application/json.*")
				? "forward:/error/404" // application/json 응답인 경우
				: "index"; // 아닌 경우
	}
	
	@ExceptionHandler(NoResourceFoundException.class)
	public void handlerNoResourceFoundException(HttpServletResponse response) throws Exception {
		response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		response.setContentType("text/plain"); // html 태그까지 모두 보여줌
		response.setCharacterEncoding("utf-8");
		response.getWriter().print("No Resource Found");
	}
	
	// 나머지 예외 처리
	@ExceptionHandler(Exception.class)
	public String handler(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
		// logging
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());

		request.setAttribute("errors", errors);
		
		return "forward:/error/500"; // WhitelabelErrorController._500()
	}
}
