package domain

import javax.persistence.Id
import javax.persistence.GeneratedValue
import org.eclipse.xtend.lib.annotations.Accessors
import javax.persistence.Entity
import java.time.LocalDateTime

@Accessors
@Entity
class Log {
	@Id
	@GeneratedValue
	Long id
	LocalDateTime fechaYHora
	String lugar
}