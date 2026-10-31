import { Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { TrackClickDirective } from '../../track-click.directive';
import { siteContent } from '../../content/site-content';

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  eventName: string;
}

@Component({
  selector: 'app-footer',
  imports: [TrackClickDirective, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly socialLinks: readonly SocialLink[] = [
    {
      href: siteContent.contacts.instagram,
      icon: 'simple-icons:instagram',
      label: 'Instagram Эльмиры',
      eventName: 'instagram_contacts_click',
    },
    {
      href: siteContent.contacts.vk,
      icon: 'simple-icons:vk',
      label: 'VK Эльмиры',
      eventName: 'vk_contacts_click',
    },
    {
      href: siteContent.contacts.tiktok,
      icon: 'simple-icons:tiktok',
      label: 'TikTok Эльмиры',
      eventName: 'tiktok_contacts_click',
    },
    {
      href: siteContent.contacts.telegram,
      icon: 'simple-icons:telegram',
      label: 'Telegram Эльмиры',
      eventName: 'telegram_contacts_click',
    },
  ];
}
