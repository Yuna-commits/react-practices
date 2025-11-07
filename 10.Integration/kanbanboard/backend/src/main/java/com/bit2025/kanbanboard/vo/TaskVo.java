package com.bit2025.kanbanboard.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class TaskVo {
	
	private Long no;
	private String name;
	private String done;
	private Long cardNo;
	
}
