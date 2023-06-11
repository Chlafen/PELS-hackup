import {Injectable, InternalServerErrorException, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../../user/user.service";
import {NextFunction} from "express";
import {verify} from "jsonwebtoken";

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {
    constructor(
        private readonly userService: UserService
    ) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers['auth-user'];
            console.log(token);

            if (!token) return next(new UnauthorizedException("auth-user header is missing."));

            const decoded = verify(token, process.env.SECRET, {"algorithms": ["HS256"]})
            if (!decoded) return next(new UnauthorizedException("Invalid token."));

            const user = await this.userService.findOne(decoded["id"])
            req["user"] = user;
            next();
        } catch (err) {
            next(new InternalServerErrorException("Error occurred."))
        }
    }
}