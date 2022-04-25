var aracBilgileri = [
{
    id:'bmw116d_123',
    model:'bmw 116d',
    yil:2015,
    renk:'Beyaz',
    servisKayitlari : [
        {
            id:'bmw116d_123_1',
            tarih:'20.01.2016',
            km:'13000',
            ucret:900,
            detay:[
                {id:'bmw116d_123_1_1', aciklama:'Yağ değişimi', ucret:300},
                {id:'bmw116d_123_1_2', aciklama:'Filtre değişimi', ucret:150},
                {id:'bmw116d_123_1_3', aciklama:'Fren hidroliği', ucret:250}
            ]
        },
        {
            id:'bmw116d_123_2',
            tarih:'10.01.2017',
            km:'28000',
            ucret:1800,
            detay:[
                {id:'bmw116d_123_1_1', aciklama:'Lastik değişimi', ucret:50},
                {id:'bmw116d_123_1_2', aciklama:'Kaporta düzeltme', ucret:450},
                {id:'bmw116d_123_1_3', aciklama:'Balans ayarı', ucret:100},
                {id:'bmw116d_123_1_4', aciklama:'Balata değişimi', ucret:180}
            ]
        }
    ]
},
{
    id:'bmw118i_123',
    model:'bmw 118i',
    yil:2015,
    renk:'Beyaz',
    servisKayitlari : [
        {
            id:'bmw118i_123_1',
            tarih:'20.01.2016',
            km:'13000',
            ucret:900,
            detay:[
                {id:'bmw118i_123_1_1', aciklama:'Yağ değişimi', ucret:300},
                {id:'bmw118i_123_1_2', aciklama:'Filtre değişimi', ucret:150},
                {id:'bmw118i_123_1_3', aciklama:'Fren hidroliği', ucret:250}
            ]
        },
        {
            id:'bmw118i_123_1',
            tarih:'10.01.2017',
            km:'28000',
            ucret:1800,
            detay:[
                {id:'bmw118i_123_1_1', aciklama:'Lastik değişimi', ucret:50},
                {id:'bmw118i_123_1_2', aciklama:'Kaporta düzeltme', ucret:450},
                {id:'bmw118i_123_1_3', aciklama:'Balans ayarı', ucret:100},
                {id:'bmw118i_123_1_4', aciklama:'Balata değişimi', ucret:180}
            ]
        }
    ]
}
]

console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);

console.log(aracBilgileri[0].servisKayitlari[0].detay[0]);
console.log(aracBilgileri[0].servisKayitlari[0].tarih);
console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].detay[1]);
console.log(aracBilgileri[0].servisKayitlari[1].detay[0]);

console.log(aracBilgileri[1].id);
console.log(aracBilgileri[1].model);
console.log(aracBilgileri[1].renk);

console.log(aracBilgileri[1].servisKayitlari[0].detay[0]);
console.log(aracBilgileri[1].servisKayitlari[0].tarih);
console.log(aracBilgileri[1].servisKayitlari[0].km);
console.log(aracBilgileri[1].servisKayitlari[0].detay[1]);
console.log(aracBilgileri[1].servisKayitlari[1].detay[0].aciklama);