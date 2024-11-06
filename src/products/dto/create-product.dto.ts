import { Type } from "class-transformer";
import { IsString, IsNumber, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    public name: string;

    @IsNumber({
        maxDecimalPlaces: 4
    })
    @Min(0)
    @Type(() => Number)
    public price: number;
}
