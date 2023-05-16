package kz.bitlab.finalproject.pagebuilder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Page extends BaseEntity {
    private String title;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Block> blocks;

    @ManyToOne(fetch = FetchType.EAGER)
    private WebSite webSite;
}
