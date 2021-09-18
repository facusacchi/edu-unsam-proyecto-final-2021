package bootstrap

import org.uqbar.arena.bootstrap.Bootstrap
import domain.Usuario
import domain.Ubicacion
import domain.Evento
import domain.Administrador
import domain.Supervisor

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
	}
	
	def void inicializarUsuariosSupervisores() {
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
	}
	
	def void inicializarUbicaciones() {
		tornavias = new Ubicacion() => [
			nombre = "Tornavías"
		]
		
		facultadSociales = new Ubicacion() => [
			nombre = "Facultad Ciencias Sociales"
		]
	}
	
	def void inicializarEventos() {
		entrada = new Evento() => [
			nombre = "Entrada"
		]
		
		salida = new Evento() => [
			nombre = "Salida"
		]
	}
	
	override isPending() {
		true
	}
	
	override run() {
		inicializarUsuariosAdministradores()
		inicializarUbicaciones()
		inicializarEventos()
	}
	
}