package ar.edu.unsam.receta.controller

import io.swagger.annotations.ApiOperation
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class RecetaController {

	@GetMapping("/")
	@ApiOperation("Devuelve simplemente hola y muestra cómo documentar Swagger")
	def defaultGet() {
		return "hola"
	}
}
