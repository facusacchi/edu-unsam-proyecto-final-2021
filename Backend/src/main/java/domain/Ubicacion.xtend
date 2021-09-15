package domain

import javax.persistence.Id
import javax.persistence.GeneratedValue
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class Ubicacion {
	@Id
	@GeneratedValue
	Long id
	
	String nombre
}