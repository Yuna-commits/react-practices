package com.bit2025.kanbanboard.dto;

import lombok.Getter;

@Getter
public class JsonResult<T> {
	private String result; /* "success" or "fail" */
	private T data; /* if success, data set */
	private String message; /* if fail, message set */

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
