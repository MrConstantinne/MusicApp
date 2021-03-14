import * as path from "path";
import { Module } from "@nestjs/common";
import { FileModule } from "./file/file.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./track/track.module";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
    imports: [
        ServeStaticModule.forRoot({
           rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(
            'mongodb+srv://music:pBiMfHinEiVA5v3d@1.xbwcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        ),
        TrackModule,
        FileModule,
    ]
})
export class AppModule {}