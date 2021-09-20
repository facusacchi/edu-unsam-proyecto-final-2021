package bootstrap

import org.uqbar.arena.bootstrap.Bootstrap
import domain.Usuario
import domain.Ubicacion
import domain.Evento
import domain.Administrador
import domain.Supervisor
import repositorios.RepoUsuario
import domain.Log
import repositorios.RepoLog
import javax.persistence.EntityManagerFactory
import javax.persistence.Persistence
import repositorios.RepoUbicacion
import repositorios.RepoEvento

class BoostrapAppcessTracker implements Bootstrap{
	var Administrador mcabeledo
	var Administrador bmenchon
	var Administrador fsacchi
	var Administrador cmaggiorano
	var Administrador dsalamida
	var Administrador mcuellar
	var Administrador cmaccarrone
	
	var Supervisor pepe
	var Supervisor usuarioHabilitado
	
	var Ubicacion tornavias
	var Ubicacion facultadSociales
	
	var Evento entrada
	var Evento salida
	
	def void inicializarUsuariosAdministradores() {
		// Creacion de usuarios administradores
		mcabeledo = new Administrador() => [
			nombre = "María Claudia"
			apellido = "Abeledo"
			apodo = "mcabeledo"
		]

		bmenchon = new Administrador() => [
			nombre = "Barbara"
			apellido = "Menchon"
			apodo = "bmenchon"
		]

		fsacchi = new Administrador() => [
			nombre = "Facundo"
			apellido = "Sacchi"
			apodo = "fsacchi"
		]

		cmaggiorano = new Administrador() => [
			nombre = "Cristian"
			apellido = "Maggiorano"
			apodo = "cmaggiorano"
		]

		dsalamida = new Administrador() => [
			nombre = "Diego"
			apellido = "Salamida"
			apodo = "dsalamida"
		]
		
		mcuellar = new Administrador() => [
			nombre = "Miguel"
			apellido = "Cuellar"
			apodo = "mcuellar"
		]
		
		cmaccarrone = new Administrador() => [
			nombre = "Carlos"
			apellido = "Maccarrone"
			apodo = "cmaccarrone"
		]
	
		// Carga de usuarios administradores en repositorio
		cargaUsuario(mcabeledo)
		cargaUsuario(bmenchon)
		cargaUsuario(fsacchi)
		cargaUsuario(cmaggiorano)
		cargaUsuario(dsalamida)
		cargaUsuario(mcuellar)
		cargaUsuario(cmaccarrone)
	}
	
	def void inicializarUsuariosSupervisores() {
		// Creacion de usuarios supervisores
		pepe = new Supervisor() => [
			nombre = "Pedro"
			apellido = "Perez"
			apodo = "pepe"
		]
		
		usuarioHabilitado = new Supervisor() => [
			nombre = "Supervisor"
			apellido = "Ya habilitado"
			apodo = "habilitado"
			habilitado = true
		]
		
		// Carga de usuarios administradores en repositorio
		cargaUsuario(pepe)
		cargaUsuario(usuarioHabilitado)
	}
	
	def void inicializarUbicaciones() {
		tornavias = new Ubicacion() => [
			nombre = "Tornavías"
		]
		
		facultadSociales = new Ubicacion() => [
			nombre = "Facultad Ciencias Sociales"
		]
		
		cargaUbicacion(tornavias)
		cargaUbicacion(facultadSociales)
	}
	
	def void inicializarEventos() {
		entrada = new Evento() => [
			nombre = "Entrada"
		]
		
		salida = new Evento() => [
			nombre = "Salida"
		]
		
		cargaEvento(entrada)
		cargaEvento(salida)
	}
	
	def void cargaUsuario(Usuario usuario) {
		val repoUsuario = RepoUsuario.instance
		val listaUsuarios = repoUsuario.searchByExample(usuario)
		if (listaUsuarios.isEmpty) {
			repoUsuario.create(usuario)
			println("Usuario " + usuario.nombre + " creada")
		} else {
			val zonaBD = listaUsuarios.head
			usuario.id = zonaBD.id
			repoUsuario.update(usuario)
		}
	}
	
	def void cargaLog(Log log) {
		val repoLog = RepoLog.instance
		val listaLogs = repoLog.searchByExample(log)
		if (listaLogs.isEmpty) {
			repoLog.create(log)
			println("Log " + log.id + " creado")
		} else {
			val zonaBD = listaLogs.head
			log.id = zonaBD.id
			repoLog.update(log)
		}
	}
	
	def void cargaUbicacion(Ubicacion ubicacion) {
		val repoUbicacion = RepoUbicacion.instance
		repoUbicacion.create(ubicacion)
	}
	
	def void cargaEvento(Evento evento) {
		val repoEvento = RepoEvento.instance
		repoEvento.create(evento)
	}
	
	override isPending() {
		true
	}
	
	override run() {
		inicializarUsuariosAdministradores()
		inicializarUsuariosSupervisores
		inicializarUbicaciones()
		inicializarEventos()
	}
	
}