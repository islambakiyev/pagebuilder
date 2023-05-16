package kz.bitlab.finalproject.pagebuilder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Block extends BaseEntity {
    private String type;

    @Column(columnDefinition = "TEXT")
    private String text;
}
