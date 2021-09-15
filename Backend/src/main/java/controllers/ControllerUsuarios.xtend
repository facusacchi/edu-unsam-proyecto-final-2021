package controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.xtrest.api.Result
import repositorios.RepoUsuario
import domain.Usuario
import org.uqbar.xtrest.api.annotation.Put
import org.uqbar.xtrest.api.annotation.Body

@Controller
class ControllerUsuarios {
	extension JSONUtils = new JSONUtils
	
	@Get("/username/:nombre/password/:password")
	def Result usuario() {
		try {
			val Usuario usuario = RepoUsuario.instance.autenticar(nombre, password)

			ok(usuario.toJson)

		} catch (Exception e) {
			internalServerError(e.message)
		}
	}

	@Get("/usuario/:id")
	def Result sincronizarUsuarioDelFrontYBack() {
		ok(RepoUsuario.instance.searchById(Long.parseLong(id)).toJson)
	}

	@Put("/usuario/:id")
	def Result actualizarUsuario(@Body String body) {
		try {
			RepoUsuario.instance.actualizarUsuario(body.fromJson(Usuario))
			ok(RepoUsuario.instance.searchById(Long.parseLong(id)).toJson)
		} catch (RuntimeException e) {
			throw new RuntimeException(e)
		}
	}

}