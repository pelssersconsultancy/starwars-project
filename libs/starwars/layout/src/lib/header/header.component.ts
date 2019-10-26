import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent  {

  constructor() {
    window['ClarityIcons'].add({"darth-vader-icon": "<svg baseProfile='tiny' height='512px' id='Layer_1' version='1.2' viewBox='0 0 512 512' width='512px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M433.985,210.381v-64.877c0-79.296-64.882-144.173-144.173-144.173h-72.086c-79.302,0-144.173,64.876-144.173,144.173  v64.877L1.467,397.808c0,36.043,112.952,108.129,252.303,108.129c139.339,0,252.303-72.086,252.303-108.129L433.985,210.381z   M145.64,447.367c-7.474,0-13.516-6.043-13.516-13.517s6.042-13.517,13.516-13.517c7.474,0,13.517,6.043,13.517,13.517  S153.114,447.367,145.64,447.367 M127.618,253.634c0-9.914,4.998-24.404,11.111-32.201c0,0,17.13-21.864,51.965-21.864  c17.669,0,30.001,8.119,30.001,8.119c8.271,5.444,15.053,18.01,15.053,27.924v27.033c0,4.957-8.107,9.011-18.022,9.011H145.64  C135.726,271.656,127.618,263.543,127.618,253.634 M199.705,433.851h-18.021v-36.043l18.021-18.022V433.851z M244.759,433.851  h-27.033v-72.087h27.033V433.851z M226.737,343.742V316.71c0-14.936,12.108-27.032,27.032-27.032  c14.936,0,27.032,12.097,27.032,27.032v27.032H226.737z M289.812,433.851H262.78v-72.087h27.032V433.851z M325.856,433.851h-18.022  v-54.065l18.022,18.022V433.851z M361.899,447.367c-7.474,0-13.517-6.043-13.517-13.517s6.043-13.517,13.517-13.517  s13.516,6.043,13.516,13.517S369.373,447.367,361.899,447.367 M361.899,271.656h-72.087c-9.914,0-18.021-4.054-18.021-9.011v-27.033  c0-9.915,6.77-22.48,15.054-27.924c0,0,12.319-8.119,30.001-8.119c34.834,0,51.964,21.864,51.964,21.864  c6.113,7.796,11.111,22.287,11.111,32.201C379.921,263.543,371.813,271.656,361.899,271.656 M473.291,406.208  c-1.068,0.41-2.171,0.61-3.262,0.61c-3.603,0-7.017-2.183-8.39-5.737l-65.539-168.343c-17.329-43.3-38.742-60.201-76.393-60.201  c-24.968,0-45.91,15.481-46.122,15.651c-11.11,8.336-28.522,8.301-39.645,0c-0.176-0.17-21.33-15.651-46.122-15.651  c-37.627,0-59.063,16.901-76.416,60.271L45.911,401.081c-1.807,4.634-7.063,6.934-11.674,5.127  c-4.635-1.795-6.935-7.017-5.116-11.674l65.528-168.331c20.098-50.27,47.964-71.688,93.17-71.688  c30.928,0,55.895,18.462,56.939,19.23c4.716,3.561,13.305,3.561,18.01,0c1.056-0.769,26.035-19.23,56.939-19.23  c45.219,0,73.072,21.418,93.158,71.617l65.563,168.402C480.225,399.191,477.937,404.413,473.291,406.208'/></svg>"});
  }

}
