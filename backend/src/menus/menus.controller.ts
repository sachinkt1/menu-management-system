import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
    constructor(private menusService: MenusService) {}

    @Get()
    getMenus() {
        return this.menusService.getMenus();
    }

    @Get(':id')
    getMenuById(@Param('id') id: string) {
        return this.menusService.getMenuById(Number(id));
    }

    @Post(':id/items')
    addMenuItem(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('parentId') parentId?: number,
    ) {
        return this.menusService.addMenuItem(Number(id), name, parentId);
    }

    @Patch('items/:itemId')
    updateMenuItem(
        @Param('itemId') itemId: string,
        @Body('name') name: string,
    ) {
        return this.menusService.updateMenuItem(Number(itemId), name);
    }

    @Delete('items/:itemId')
    deleteMenuItem(@Param('itemId') itemId: string) {
        return this.menusService.deleteMenuItem(Number(itemId));
    }

    @Post()
    saveMenu(@Body('name') name: string) {
        return this.menusService.saveMenu(name);
    }
}