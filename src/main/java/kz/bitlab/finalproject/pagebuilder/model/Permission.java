package kz.bitlab.finalproject.pagebuilder.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Getter
@Setter
public class Permission extends BaseEntity implements GrantedAuthority {
    private String role;
    private String name;

    @Override
    public String getAuthority() {
        return role;
    }
}
