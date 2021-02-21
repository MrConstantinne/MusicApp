import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://test:pBiMfHinEiVA5v3d@1.xbwcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        ),
        TrackModule
    ]
})
export class AppModule {}