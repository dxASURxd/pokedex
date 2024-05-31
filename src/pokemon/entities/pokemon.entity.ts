import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {

    // id: string; - este lo da el mongo

    @Prop({
        unique: true,
        index: true,
    })
    name:  string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );