import fs from 'fs';
import ejs from 'ejs';

class ForgotPasswordTemplate {
  public passwordResetTemplate(username: string, resetLink: string): string {
    return ejs.render(fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf8'), {
      username,
      resetLink,
      image_url: 'https://pluspng.com/img-png/padlock-png-hd-lock-icon-free-icon-512.png'
    });
  }
}

export const forgotPasswordTemplate: ForgotPasswordTemplate = new ForgotPasswordTemplate();
