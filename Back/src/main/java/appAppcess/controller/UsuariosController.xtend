package controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import services.UsuarioService

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
class UsuariosController {
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/")
	def getUsers() {
		usuarioService.getUsers();
	}
}