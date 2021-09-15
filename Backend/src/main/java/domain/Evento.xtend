package domain

import javax.persistence.GeneratedValue
import javax.persistence.Id

class Evento {
	@Id
	@GeneratedValue
	Long id
	
	String nombre
}