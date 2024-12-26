import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenusService {
    constructor(private prisma: PrismaService) {}

    async getMenus() {
        return this.prisma.menu.findMany({
            include: { items: true },
        });
    }

    async getMenuById(id: number) {
        return this.prisma.menu.findUnique({
            where: { id },
            include: { items: true },
        });
    }

    async addMenuItem(menuId: number, name: string, parentId?: number) {
        return this.prisma.menuItem.create({
            data: {
                name,
                menuId,
                parentId,
            },
        });
    }

    async updateMenuItem(itemId: number, name: string) {
        return this.prisma.menuItem.update({
            where: { id: itemId },
            data: { name },
        });
    }

    async deleteMenuItem(itemId: number) {
        return this.prisma.menuItem.delete({
            where: { id: itemId },
        });
    }

    async saveMenu(name: string) {
        return this.prisma.menu.create({
            data: { name },
        });
    }
}