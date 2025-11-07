package com.bit2025.kanbanboard.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CardVo {
	
	private Long no;
	private String title;
	private String description;
	private String status;
	
}
