package controllers

import org.uqbar.xtrest.api.annotation.Put
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.json.JSONUtils
import repositorios.RepoLog
import domain.Filtro
import org.uqbar.xtrest.api.annotation.Controller

@Controller
class ControllerLogs {
	extension JSONUtils = new JSONUtils
	
//	@Get("/logs")
//	def Result todosLosLogs() {
//		try {
//			ok(RepoLog.instance.agregarDatosPasaje(Long.parseLong(id)).toJson)
//		} catch (Exception e) {
//			internalServerError(e.message)
//		}
//	}
	
	@Put("/logs/filtro")
	def Result usuarioVuelo(@Body String body) {
		ok(RepoLog.instance.getLogsFiltrados(body.fromJson(Filtro)).toJson)
	}
}