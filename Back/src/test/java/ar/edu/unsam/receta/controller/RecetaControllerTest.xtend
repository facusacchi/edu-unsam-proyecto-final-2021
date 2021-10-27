package ar.edu.unsam.receta.controller;

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@AutoConfigureJsonTesters
@WebMvcTest
@DisplayName("Dado un controller de tareas")
class RecetaControllerTest {

	@Autowired
	MockMvc mockMvc
	
	@DisplayName("se pueden obtener todas las tareas")
	@Test
	def void testGetTodasLasTareas() {
		mockMvc
			.perform(MockMvcRequestBuilders.get("/"))
			.andExpect(status.isOk)
			.andExpect(content.string("hola"))
	}
}