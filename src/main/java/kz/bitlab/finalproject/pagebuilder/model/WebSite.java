package kz.bitlab.finalproject.pagebuilder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class WebSite extends BaseEntity {
    private String name;
    private String link;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

}
