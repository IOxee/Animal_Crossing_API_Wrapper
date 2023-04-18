import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ACNH } from 'src/environments/environment';


import { Villagers } from 'src/app/models/villagers/villagers';
import { VillagersIcons } from 'src/app/models/villagers/villagersIcons';

import { Music } from 'src/app/models/music/music';
import { MusicIcons } from 'src/app/models/music/musicIcons';


@Injectable({
    providedIn: 'root'
})
export class AcnhRestService {
    villagers: Villagers[] = [];
    villagersIcons: VillagersIcons[] = [];
    langNames = [
        'name-USen',
        'name-EUen',
        'name-EUde',
        'name-EUes',
        'name-USes',
        'name-USfr',
        'name-EUfr',
        'name-USit',
        'name-EUit',
        'name-USnl',
        'name-EUnl',
        'name-CNzh',
        'name-TWzh',
        'name-JPja',
        'name-KRko',
        'name-EUru'
    ];

    constructor(private http: HttpClient) {}

    // ----------------- VILLAGERS -------------------
    retriveVillagersIcons(): void {
        this.http.get<VillagersIcons[]>(`${API_ACNH.baseUrl}${API_ACNH.villagersEndpoint}`).subscribe(villagersIcons => {
            for (const key in villagersIcons) {
                if (villagersIcons.hasOwnProperty(key)) {
                    const element = villagersIcons[key];
                    this.villagersIcons.push(new VillagersIcons(element.id, key, element.name, element.image_uri));
                }
            }
        });
    }

    retriveVillagers(): void {
        this.http.get<Villagers[]>(`${API_ACNH.baseUrl}${API_ACNH.villagersEndpoint}`).subscribe(villagers => {
            this.villagers = villagers;
        });
    }

    get ACNHVillagers(): Villagers[] {
        return this.villagers;
    }

    ACNHVillagersIcons(): VillagersIcons[] {
        return this.villagersIcons;
    }

    checkIfExistVillager(villagerName: string): boolean {
        for (const key in this.villagers) {
            if (this.villagers.hasOwnProperty(key)) {
                const element = this.villagers[key];
                if (element.name['name-USen'].toLowerCase() === villagerName.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    getVillagerByName(villagerName: string): Villagers[] {
        for (const key in this.villagers) {
            if (this.villagers.hasOwnProperty(key)) {
                const element = this.villagers[key];
                if (element.name['name-USen'].toLowerCase() === villagerName.toLowerCase()) {
                    return [element];
                }
            }
        }
        return []
    }

    getVillagerByCode(villagerCode: string): Villagers[] {
        for (const key in this.villagers) {
            if (this.villagers.hasOwnProperty(key)) {
                const element = this.villagers[key];
                if (key === villagerCode) {
                    return [element];
                }
            }
        }
        return [];
    }

    // ----------------- MUSIC -------------------
    music: Music[] = [];
    musicIcons: MusicIcons[] = [];

    retriveMusicIcons(): void {
        this.http.get<MusicIcons[]>(`${API_ACNH.baseUrl}${API_ACNH.songsEndpoint}`).subscribe(musicIcons => {
            for (const key in musicIcons) {
                if (musicIcons.hasOwnProperty(key)) {
                    const element = musicIcons[key];
                    this.musicIcons.push(new MusicIcons(element.id, key, element.name, element.image_uri));
                }
            }
        });
    }

    retriveMusic(): void {
        this.http.get<Music[]>(`${API_ACNH.baseUrl}${API_ACNH.songsEndpoint}`).subscribe(music => {
            this.music = music;
        });
    }

    get ACNHMusic(): Music[] {
        return this.music;
    }

    ACNHMusicIcons(): MusicIcons[] {
        return this.musicIcons;
    }

    checkIfExistMusic(musicName: string): boolean {
        for (const key in this.music) {
            if (this.music.hasOwnProperty(key)) {
                const element = this.music[key];
                if (element.name['name-USen'].toLowerCase() === musicName.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    getMusicByName(musicName: string): Music[] {
        for (const key in this.music) {
            if (this.music.hasOwnProperty(key)) {
                const element = this.music[key];
                if (element.name['name-USen'].toLowerCase() === musicName.toLowerCase()) {
                    return [element];
                }
            }
        }
        return []
    }

    getMusicByCode(musicCode: string): Music[] {
        for (const key in this.music) {
            if (this.music.hasOwnProperty(key)) {
                const element = this.music[key];
                if (key === musicCode) {
                    return [element];
                }
            }
        }
        return [];
    }
}

