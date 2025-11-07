package com.bit2025.kanbanboard.controller.landing;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LandingController {

	@GetMapping
	public String index() {
		return "index";
	}
}
