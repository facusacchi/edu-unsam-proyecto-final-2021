import org.springframework.beans.factory.annotation.Autowired
import repository.RepoUsuario
import repository.RepoLog
import domain.Usuario
import domain.Log
import java.time.LocalDateTime

class Bootstrap {

	@Autowired
	RepoUsuario repoUsuario

	@Autowired
	RepoLog repoLog

	Usuario pepe
	Usuario manolo

	Log entradaPepe
	Log salidaPepe
	Log entradaManolo
	Log salidaManolo
	
	
	def void initRun() {
		initUsuarios()
		initLogs()
	}
	
	def void initUsuarios() {
		pepe = new Usuario => [
			nombre = "Pepe"
			apellido = "Palala"
			userName = "pepito"
			email = "algo@mail.com"
			password = "123"
			telefono = "9876521"
		]
		
		this.crearUsuario(pepe)

		manolo = new Usuario => [
			nombre = "Manolo"
			apellido = "Palala"
			userName = "manolito"
			email = "nada@mail.com"
			password = "312"
			telefono = "7123498"
		]
		
		this.crearUsuario(manolo)
	}
	
	def void initLogs() {
		entradaPepe = new Log => [
			fechaYHora = LocalDateTime.now().minusMinutes(300)
			lugar = "Cerca"
		]
		
		this.crearLog(entradaPepe)
		
		salidaPepe = new Log => [
			fechaYHora = LocalDateTime.now().minusMinutes(200)
			lugar = "Cerca"
		]
		
		this.crearLog(salidaPepe)
		
		entradaManolo = new Log => [
			fechaYHora = LocalDateTime.now().minusMinutes(150)
			lugar = "Lejos"
		]
		
		this.crearLog(entradaManolo)
		
		salidaManolo = new Log => [
			fechaYHora = LocalDateTime.now()
			lugar = "Mas Lejos"
		]
		
		this.crearLog(salidaManolo)
	}
	
	def void crearUsuario(Usuario usuario) {
		repoUsuario.save(usuario)
		println("Usuario " + usuario.userName + " creado")
	}
	
	def void crearLog(Log log) {
		repoLog.save(log)
		println("Log " + log.lugar + " creado")
	}
}
