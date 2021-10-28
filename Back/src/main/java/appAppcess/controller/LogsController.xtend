package appAppcess.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import appAppcess.services.LogService

@RestController
@CrossOrigin(origins="http://localhost:3000")
class LogsController {
	
	@Autowired
	LogService logService;
	
	@GetMapping("/logs")
	def getLogs() {
		logService.getLogs();
	}
}
