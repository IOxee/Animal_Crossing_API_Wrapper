import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AcnhRestService } from 'src/app/services/acnh-rest.service';
import { Music } from 'src/app/models/music/music';
import { MusicIcons } from 'src/app/models/music/musicIcons';

@Component({
    selector: 'app-music',
    templateUrl: './music.page.html',
    styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
    time: string = '00:00 AM';
    app_title: any = 'Music';
    musicSelected: boolean = false;
    musicName: string = 'Music';
    musicSelectedData: any;

    updateTime() {
        let date = new Date();
        this.time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }

    constructor(private Router: Router, private acnhService: AcnhRestService) {
        this.acnhService.retriveMusic();
        this.acnhService.retriveMusicIcons();
    }

    ngOnInit() {
        this.updateTime();
        setInterval(() => this.updateTime(), 500);
        this.acnhService.retriveMusic();
        this.acnhService.retriveMusicIcons();
    }

    get musicIcons(): MusicIcons[] {
        return this.acnhService.ACNHMusicIcons();
    }

    searchMusic() {
        let searchbar = document.getElementById('music_seachbar') as HTMLIonSearchbarElement;
        let searchValue = searchbar.value as string;
        console.log(searchValue);
        if (this.acnhService.checkIfExistMusic(searchValue)) {
            const tempArr = this.acnhService.getMusicByName(searchValue);
            for (const key in tempArr) {
                if (tempArr.hasOwnProperty(key)) {
                    const element = tempArr[key];
                    this.showContent(element);
                }
            }

        }
    }

    showContentByCode(music: any) {
        this.musicSelected = true;
        const tempArr = this.acnhService.getMusicByCode(music.code);

        for (const key in tempArr) {
            if (tempArr.hasOwnProperty(key)) {
                const element = tempArr[key];
                this.showContent(element);
            }
        }
    }

    showContent(music: any) {
        this.musicSelected = true;
        this.musicName = music.name['name-USen'];
        this.musicSelectedData = music;
    }

    goBack() {
        if (this.musicSelected) {
            this.musicSelected = false;
            this.app_title = 'Music';
        } else {
            this.Router.navigate(['/phone']);
        }
    }
}
