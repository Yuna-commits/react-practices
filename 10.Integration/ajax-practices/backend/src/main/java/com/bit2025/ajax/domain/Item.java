package com.bit2025.ajax.domain;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = { "type", "name", "image" })
public class Item {

	@NonNull
	private Long id;
	@NonNull
	private String type;
	@NonNull
	private String name;
	private String image;

	public Item(Long id) {
		this.id = id;
	}
}
