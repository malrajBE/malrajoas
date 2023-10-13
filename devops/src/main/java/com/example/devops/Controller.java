package com.example.devops;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@GetMapping(value = "/dev")
	public String getMsg() {
		return "successfully excuted";
	}
}
