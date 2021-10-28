package appAppcess.domain

import javax.persistence.GeneratedValue	
import javax.persistence.Id
import org.eclipse.xtend.lib.annotations.Accessors
import javax.persistence.Entity

@Accessors
@Entity
class Evento {
	@Id
	@GeneratedValue
	Long id
	
	String nombre
}
