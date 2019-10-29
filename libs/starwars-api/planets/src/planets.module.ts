import { Module, HttpModule } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';

@Module({
  imports: [HttpModule],
  controllers: [PlanetsController],
  providers: [PlanetsService],
  exports: [PlanetsService],
})
export class PlanetsModule {}
