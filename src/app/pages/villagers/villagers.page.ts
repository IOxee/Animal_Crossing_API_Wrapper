import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AcnhRestService } from 'src/app/services/acnh-rest.service';
import { VillagersIcons } from 'src/app/models/villagers/villagersIcons';


@Component({
    selector: 'app-villagers',
    templateUrl: './villagers.page.html',
    styleUrls: ['./villagers.page.scss'],
})
export class VillagersPage implements OnInit {
    time: string = '00:00 AM';
    arrayVillagers: any = [];
    villagerSelected: boolean = false;
    villagerName: string = 'Villagers';
    villagerSelectedData: any = [];

    constructor(private acnhService: AcnhRestService, private router: Router) {
        this.acnhService.retriveVillagersIcons();
        this.acnhService.retriveVillagers();
    }

    ngOnInit() {
        this.updateTime();
        setInterval(() => this.updateTime(), 500);
        this.acnhService.retriveVillagersIcons();
    }

    get villagersIcon(): VillagersIcons[] {
        return this.acnhService.ACNHVillagersIcons();
    }


    updateTime() {
        let date = new Date();
        this.time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }

    searchVillager() {
        let searchbar = document.getElementById('villagers_seachbar') as HTMLIonSearchbarElement;
        let searchValue = searchbar.value as string;
        console.log(searchValue);
        if (this.acnhService.checkIfExistVillager(searchValue)) {
            const tempArr = this.acnhService.getVillagerByName(searchValue);
            for (const key in tempArr) {
                if (tempArr.hasOwnProperty(key)) {
                    const element = tempArr[key];
                    this.showContent(element);
                }
            }

        }
        // this.showContent();
    }

    showContentByCode(villager: any) {
        this.villagerSelected = true;
        const tempArr = this.acnhService.getVillagerByCode(villager.code);

        for (const key in tempArr) {
            if (tempArr.hasOwnProperty(key)) {
                this.villagerName = tempArr[key].name['name-USen'];
                const element = tempArr[key];
                this.villagerSelectedData = element;
            }
        }
    }

    showContent(villager: any) {
        this.villagerSelected = true;
        this.villagerName = villager.name['name-USen'];
        this.villagerSelectedData = villager;
    }

    goBack() {
        if (this.villagerSelected) {
            this.villagerSelected = false;
            this.villagerName = 'Villagers';
        } else {
            this.router.navigate(['/phone']);
        }
    }
}
