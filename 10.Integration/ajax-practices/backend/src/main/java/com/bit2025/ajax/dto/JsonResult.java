package com.bit2025.ajax.dto;

import lombok.Getter;

@Getter
public class JsonResult<T> {
	
	private String result;
	private T data;
	private String message;

	private JsonResult(String result, T data, String message) {
		this.result = result;
		this.data = data;
		this.message = message;
	}

	public static <T> JsonResult<T> success(T data) {
		return new JsonResult<>("success", data, null);
	}

	public static JsonResult<Object> fail(String message) {
		return new JsonResult<>("fail", null, message);
	}

}
