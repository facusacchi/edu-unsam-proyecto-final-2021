package appAppcess.domain

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
@Entity
class Log {
	@Id
	@GeneratedValue
	Long id
	LocalDateTime fechaYHora
	String lugar
}
