function getHTML(modelo, nome, cargo, telefone, email, site, endereco = '', logoSize = 140, fontSize = 19) {
    const rawPhone = telefone ? telefone.replace(/\D/g, '') : '';
    const linkMapaReal = "https://maps.app.goo.gl/bVMb2KYQ15XVLiFt9";
    const qrCodeUrl = "https://quickchart.io/qr?text=https%3A%2F%2Fwww.herboflora.com.br&dark=1E5128&light=FFFFFF&size=160";

    const logoBrancaUrl = "https://i.postimg.cc/YStfrk7t/logo-herbolfora-branco.png"; 
    const logoVerdeUrl = "https://i.postimg.cc/zv2TpRb0/01-logo-herboflora.png"; 

    const cargoSize = Math.max(10, fontSize - 6);
    const smallTextSize = Math.max(9, fontSize - 8);

    const wrapperStart = `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0; padding:0; background-color:#ffffff;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff" style="width:100%; background-color:#ffffff;">
  <tr>
    <td align="left" style="padding: 10px;">`;
    
    const wrapperEnd = `</td>
  </tr>
</table>
</body>
</html>`;

    if (modelo === '1') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="700" bgcolor="#FFFFFF" style="width:700px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border:1px solid #F4F6F4; background-color:#FFFFFF;">
  <tr>
    <td width="330" valign="middle" bgcolor="#F8F9FA" style="background-color:#F8F9FA; border-left:14px solid #4E9F3D; padding:30px 20px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-bottom:25px;">
        <tr>
          <td width="4" bgcolor="#333333" style="width:4px; background-color:#333333; font-size:0; line-height:0;">&nbsp;</td>
          <td style="padding-left:14px;">
            <div style="font-size:${fontSize}px; line-height:${fontSize + 5}px; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase; color:#1E5128; white-space:nowrap;">
              ${nome}
            </div>
            <div style="font-size:${cargoSize}px; line-height:${cargoSize + 6}px; font-weight:bold; letter-spacing:1.2px; text-transform:uppercase; color:#333333; white-space:nowrap;">
              ${cargo}
            </div>
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td width="70" valign="middle" style="width:70px;">
            <a href="https://www.herboflora.com.br" target="_blank" style="text-decoration:none;">
              <img src="${qrCodeUrl}" alt="QR Code" width="70" height="70" style="display:block; width:70px; height:70px; border:0;" />
            </a>
          </td>
          <td valign="middle" style="padding-left:14px; font-size:${smallTextSize}px; line-height:${smallTextSize + 5}px; color:#4F4F4F;">
            <strong style="color:#333333; font-size:${smallTextSize + 1}px;">Herboflora Produtos</strong><br>
            <strong style="color:#333333; font-size:${smallTextSize + 1}px;">Naturais LTDA</strong><br>
            <span style="display:inline-block; margin-top:4px; letter-spacing:0.5px; text-transform:uppercase; font-size:${smallTextSize - 1}px; color:#1E5128; font-weight:bold;">
              Aponte a c&acirc;mera para o QR Code
            </span>
          </td>
        </tr>
      </table>
    </td>
    <td width="370" valign="top" style="width:370px; padding:0;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#1E5128" style="width:100%; border-collapse:collapse; background-color:#1E5128;">
        <tr>
          <td valign="top" style="padding:25px 20px 20px 20px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-bottom:15px;">
              <tr>
                <td align="left" valign="middle">
                   <img src="${logoBrancaUrl}" alt="Herboflora" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:100%; height:auto; border:0;" />
                </td>
                <td align="right" valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-bottom:5px;">
                    <tr>
                      <td width="26" height="26" align="center" valign="middle" bgcolor="#FFFFFF" style="width:26px; height:26px; background-color:#FFFFFF; border-radius:13px;">
                        <a href="https://www.linkedin.com/company/herboflora-natural-products" target="_blank" style="display:block; width:26px; height:26px; line-height:26px; font-size:12px; font-weight:bold; color:#1E5128; text-decoration:none;">in</a>
                      </td>
                      <td width="7" style="width:7px; font-size:0;">&nbsp;</td>
                      <td width="26" height="26" align="center" valign="middle" bgcolor="#FFFFFF" style="width:26px; height:26px; background-color:#FFFFFF; border-radius:13px;">
                        <a href="https://www.herboflora.com.br" target="_blank" style="display:block; width:26px; height:26px; line-height:26px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">&#127760;</a>
                      </td>
                      <td width="7" style="width:7px; font-size:0;">&nbsp;</td>
                      <td width="26" height="26" align="center" valign="middle" bgcolor="#FFFFFF" style="width:26px; height:26px; background-color:#FFFFFF; border-radius:13px;">
                        <a href="mailto:${email}" target="_blank" style="display:block; width:26px; height:26px; line-height:26px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">@</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div style="font-size:${fontSize - 3}px; font-weight:bold; letter-spacing:0.8px; color:#FFFFFF; margin-bottom:6px; text-align:right;">
              Contato
            </div>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              ${site ? `<tr><td align="right" style="font-size:${smallTextSize}px; line-height:${smallTextSize + 6}px; color:#FFFFFF; white-space:nowrap;"><a href="https://${site.replace('https://', '')}" target="_blank" style="color:#FFFFFF; text-decoration:none;">${site}</a> &nbsp;<span style="color:#4E9F3D; font-size:${smallTextSize + 3}px;">&bull;</span></td></tr>` : ''}
              ${telefone ? `<tr><td align="right" style="font-size:${smallTextSize}px; line-height:${smallTextSize + 6}px; color:#FFFFFF; white-space:nowrap;"><a href="tel:+55${rawPhone}" style="color:#FFFFFF; text-decoration:none;">${telefone}</a> &nbsp;<span style="color:#4E9F3D; font-size:${smallTextSize + 3}px;">&bull;</span></td></tr>` : ''}
              ${email ? `<tr><td align="right" style="font-size:${smallTextSize}px; line-height:${smallTextSize + 6}px; color:#FFFFFF; white-space:nowrap;"><a href="mailto:${email}" style="color:#FFFFFF; text-decoration:none;">${email}</a> &nbsp;<span style="color:#4E9F3D; font-size:${smallTextSize + 3}px;">&bull;</span></td></tr>` : ''}
            </table>
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#333333" style="width:100%; border-collapse:collapse; background-color:#333333;">
        <tr>
          <td align="right" valign="middle" style="padding:15px 20px; font-size:${smallTextSize - 1}px; line-height:${smallTextSize + 4}px; letter-spacing:0.3px; color:#FFFFFF;">
            ${endereco ? endereco.replace(/\n/g, '<br>') : 'Av. Filhas de Sant&rsquo;Ana, 3015 &ndash; Distrito Industrial<br>Machado / MG'}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '2') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="600" bgcolor="#FFFFFF" style="width:600px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border-top:3px solid #1E5128; border-bottom:3px solid #1E5128; padding:10px 0; background-color:#FFFFFF;">
  <tr>
    <td width="120" align="center" valign="middle" style="width:120px; padding:10px;">
      <img src="${logoVerdeUrl}" alt="Herboflora" width="${logoSize * 0.7}" style="display:block; width:${logoSize * 0.7}px; max-width:100%; height:auto; border:0;" />
    </td>
    <td width="3" bgcolor="#4F4F4F" style="width:3px; background-color:#4F4F4F; font-size:0;">&nbsp;</td>
    <td valign="middle" style="padding:15px 20px;">
      <div style="font-size:${fontSize}px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#1E5128;">
        ${nome}
      </div>
      <div style="font-size:${cargoSize}px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#333333; margin-bottom:8px;">
        ${cargo}
      </div>
      <div style="font-size:${smallTextSize}px; line-height:${smallTextSize + 5}px; color:#4F4F4F;">
        ${telefone ? `${telefone} &nbsp;|&nbsp; ` : ''}
        ${site ? `<a href="https://${site.replace('https://', '')}" target="_blank" style="color:#1E5128; text-decoration:none;">${site}</a>` : ''}
      </div>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '3') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="650" bgcolor="#F8F9FA" style="width:650px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border-left:6px solid #4E9F3D; background-color:#F8F9FA; padding:12px;">
  <tr>
    <td style="padding:10px 15px;">
      <div style="font-size:${fontSize - 2}px; font-weight:bold; text-transform:uppercase; color:#1E5128;">
        ${nome} <span style="font-size:${cargoSize}px; font-weight:normal; color:#333333;">(${cargo})</span>
      </div>
      <div style="font-size:${smallTextSize}px; color:#4F4F4F; margin-top:4px;">
        ${telefone ? `Tel: ${telefone} &nbsp;&bull;&nbsp; ` : ''}
        ${email ? `E-mail: <a href="mailto:${email}" style="color:#1E5128; text-decoration:none;">${email}</a> &nbsp;&bull;&nbsp; ` : ''}
        <a href="https://www.herboflora.com.br" target="_blank" style="color:#1E5128; text-decoration:none;">www.herboflora.com.br</a>
      </div>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '4') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="720" bgcolor="#FFFFFF" style="width:720px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border:1px solid #F4F6F4; background-color:#FFFFFF;">
  <tr>
    <td width="12" bgcolor="#4E9F3D" style="width:12px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
    <td width="388" valign="top" bgcolor="#F8F9FA" style="width:388px; background-color:#F8F9FA; padding:35px 30px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-bottom:30px;">
        <tr>
          <td width="4" bgcolor="#333333" style="width:4px; background-color:#333333; font-size:0; line-height:0;">&nbsp;</td>
          <td style="padding-left:14px;">
            <div style="font-size:${fontSize + 2}px; line-height:${fontSize + 7}px; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase; color:#1E5128; white-space:nowrap;">
              ${nome}
            </div>
            <div style="font-size:${cargoSize}px; line-height:${cargoSize + 6}px; font-weight:bold; letter-spacing:1.2px; text-transform:uppercase; color:#333333; white-space:nowrap;">
              ${cargo}
            </div>
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td width="80" valign="middle" style="width:80px;">
            <a href="https://www.herboflora.com.br" target="_blank" style="text-decoration:none;">
              <img src="${qrCodeUrl}" alt="QR Code" width="80" height="80" style="display:block; width:80px; height:80px; border:0;" />
            </a>
          </td>
          <td valign="middle" style="padding-left:15px; font-size:${smallTextSize - 1}px; line-height:${smallTextSize + 4}px; font-weight:bold; color:#4F4F4F; letter-spacing:1px; text-transform:uppercase;">
            Aponte a c&acirc;mera<br>para o QR Code
          </td>
        </tr>
      </table>
    </td>
    <td width="320" valign="top" bgcolor="#1E5128" style="width:320px; background-color:#1E5128; padding:35px 30px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-bottom:30px;">
        <tr><td align="center"><img src="${logoBrancaUrl}" alt="herboflora" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:100%; height:auto; border:0; margin:0 auto;" /></td></tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.linkedin.com/company/herboflora-natural-products" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">in</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.herboflora.com.br" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#127760;</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="mailto:${email}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">@</a>
                </td>
                ${endereco ? `
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="${linkMapaReal}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#128205;</a>
                </td>
                ` : ''}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '5') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="720" bgcolor="#1E5128" style="width:720px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border:1px solid #1E5128; background-color:#1E5128;">
  <tr>
    <td width="12" bgcolor="#4E9F3D" style="width:12px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
    <td width="388" valign="top" bgcolor="#1E5128" style="width:388px; background-color:#1E5128; padding:35px 30px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-bottom:30px;">
        <tr>
          <td width="4" bgcolor="#4E9F3D" style="width:4px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
          <td style="padding-left:14px;">
            <div style="font-size:${fontSize + 2}px; line-height:${fontSize + 7}px; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase; color:#FFFFFF; white-space:nowrap;">
              ${nome}
            </div>
            <div style="font-size:${cargoSize}px; line-height:${cargoSize + 6}px; font-weight:bold; letter-spacing:1.2px; text-transform:uppercase; color:#FFFFFF; opacity: 0.8; white-space:nowrap;">
              ${cargo}
            </div>
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td width="80" valign="middle" style="width:80px;">
            <a href="https://www.herboflora.com.br" target="_blank" style="text-decoration:none;">
              <img src="${qrCodeUrl}" alt="QR Code" width="80" height="80" style="display:block; width:80px; height:80px; border:0;" />
            </a>
          </td>
          <td valign="middle" style="padding-left:15px; font-size:${smallTextSize - 1}px; line-height:${smallTextSize + 4}px; font-weight:bold; color:#FFFFFF; opacity: 0.8; letter-spacing:1px; text-transform:uppercase;">
            Aponte a c&acirc;mera<br>para o QR Code
          </td>
        </tr>
      </table>
    </td>
    <td width="1" bgcolor="#4E9F3D" style="width:1px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
    <td width="319" valign="top" bgcolor="#1E5128" style="width:319px; background-color:#1E5128; padding:35px 30px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-bottom:30px;">
        <tr><td align="center"><img src="${logoBrancaUrl}" alt="herboflora" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:100%; height:auto; border:0; margin:0 auto;" /></td></tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.linkedin.com/company/herboflora-natural-products" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">in</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.herboflora.com.br" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#127760;</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="mailto:${email}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">@</a>
                </td>
                ${endereco ? `
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="${linkMapaReal}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#128205;</a>
                </td>
                ` : ''}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '6') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="600" bgcolor="#1E5128" style="width:600px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; background-color:#1E5128; border-top:3px solid #4E9F3D; border-bottom:3px solid #4E9F3D; padding:10px 0;">
  <tr>
    <td width="120" align="center" valign="middle" style="width:120px; padding:10px;">
      <img src="${logoBrancaUrl}" alt="Herboflora" width="${logoSize * 0.7}" style="display:block; width:${logoSize * 0.7}px; max-width:100%; height:auto; border:0;" />
    </td>
    <td width="3" bgcolor="#4E9F3D" style="width:3px; background-color:#4E9F3D; font-size:0;">&nbsp;</td>
    <td valign="middle" style="padding:15px 20px;">
      <div style="font-size:${fontSize}px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#FFFFFF;">
        ${nome}
      </div>
      <div style="font-size:${cargoSize}px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#4E9F3D; margin-bottom:8px;">
        ${cargo}
      </div>
      <div style="font-size:${smallTextSize}px; line-height:${smallTextSize + 5}px; color:#FFFFFF;">
        ${telefone ? `${telefone} &nbsp;|&nbsp; ` : ''}
        ${site ? `<a href="https://${site.replace('https://', '')}" target="_blank" style="color:#4E9F3D; text-decoration:none;">${site}</a>` : ''}
      </div>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '7') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="650" bgcolor="#1E5128" style="width:650px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border-left:6px solid #4E9F3D; background-color:#1E5128; padding:12px;">
  <tr>
    <td style="padding:10px 15px;">
      <div style="font-size:${fontSize - 2}px; font-weight:bold; text-transform:uppercase; color:#FFFFFF;">
        ${nome} <span style="font-size:${cargoSize}px; font-weight:normal; color:#4E9F3D;">(${cargo})</span>
      </div>
      <div style="font-size:${smallTextSize}px; color:#FFFFFF; margin-top:4px;">
        ${telefone ? `Tel: ${telefone} &nbsp;&bull;&nbsp; ` : ''}
        ${email ? `E-mail: <a href="mailto:${email}" style="color:#FFFFFF; text-decoration:none;">${email}</a> &nbsp;&bull;&nbsp; ` : ''}
        <a href="https://www.herboflora.com.br" target="_blank" style="color:#FFFFFF; text-decoration:none;">www.herboflora.com.br</a>
      </div>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '8') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="650" bgcolor="#FFFFFF" style="width:650px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border:1px solid #E0E4E0; background-color:#FFFFFF; border-radius: 8px; overflow: hidden;">
  <tr>
    <td width="8" bgcolor="#4E9F3D" style="width:8px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
    <td width="180" align="center" valign="middle" style="width:180px; padding:20px; border-right: 1px solid #E0E4E0; background-color: #FAFAFA;">
      <img src="${logoVerdeUrl}" alt="Herboflora" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:100%; height:auto; border:0;" />
    </td>
    <td valign="middle" style="padding: 25px 30px;">
      <div style="font-size:${fontSize + 1}px; font-weight:bold; color:#1E5128; text-transform:uppercase; letter-spacing:0.5px; margin-bottom: 10px;">
        ${nome}
      </div>
      <div style="margin-bottom: 15px;">
        <span style="background-color: #1E5128; color: #FFFFFF; font-size: ${cargoSize - 2}px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
          ${cargo}
        </span>
      </div>
      <div style="width: 100%; height: 1px; background-color: #E0E4E0; margin: 15px 0;"></div>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td align="left">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#F4F6F4" style="width:28px; height:28px; background-color:#F4F6F4; border-radius:14px; border: 1px solid #E0E4E0;">
                  <a href="https://www.linkedin.com/company/herboflora-natural-products" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">in</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#F4F6F4" style="width:28px; height:28px; background-color:#F4F6F4; border-radius:14px; border: 1px solid #E0E4E0;">
                  <a href="https://www.herboflora.com.br" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#127760;</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#F4F6F4" style="width:28px; height:28px; background-color:#F4F6F4; border-radius:14px; border: 1px solid #E0E4E0;">
                  <a href="mailto:${email}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">@</a>
                </td>
                ${endereco ? `
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#F4F6F4" style="width:28px; height:28px; background-color:#F4F6F4; border-radius:14px; border: 1px solid #E0E4E0;">
                  <a href="${linkMapaReal}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#128205;</a>
                </td>
                ` : ''}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }

    if (modelo === '9') {
        return wrapperStart + `
<table cellpadding="0" cellspacing="0" border="0" width="650" bgcolor="#1E5128" style="width:650px; border-collapse:collapse; font-family:Arial, Helvetica, sans-serif; border:1px solid #1E5128; background-color:#1E5128; border-radius: 8px; overflow: hidden;">
  <tr>
    <td width="8" bgcolor="#4E9F3D" style="width:8px; background-color:#4E9F3D; font-size:0; line-height:0;">&nbsp;</td>
    <td width="180" align="center" valign="middle" style="width:180px; padding:20px; border-right: 1px solid #4E9F3D; background-color: #15381c;">
      <img src="${logoBrancaUrl}" alt="Herboflora" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:100%; height:auto; border:0;" />
    </td>
    <td valign="middle" style="padding: 25px 30px;">
      <div style="font-size:${fontSize + 1}px; font-weight:bold; color:#FFFFFF; text-transform:uppercase; letter-spacing:0.5px; margin-bottom: 10px;">
        ${nome}
      </div>
      <div style="margin-bottom: 15px;">
        <span style="background-color: #4E9F3D; color: #FFFFFF; font-size: ${cargoSize - 2}px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
          ${cargo}
        </span>
      </div>
      <div style="width: 100%; height: 1px; background-color: #4E9F3D; margin: 15px 0; opacity: 0.5;"></div>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td align="left">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.linkedin.com/company/herboflora-natural-products" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:13px; font-weight:bold; color:#1E5128; text-decoration:none;">in</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="https://www.herboflora.com.br" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#127760;</a>
                </td>
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="mailto:${email}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">@</a>
                </td>
                ${endereco ? `
                <td width="10" style="width:10px; font-size:0;">&nbsp;</td>
                <td width="28" height="28" align="center" valign="middle" bgcolor="#FFFFFF" style="width:28px; height:28px; background-color:#FFFFFF; border-radius:14px;">
                  <a href="${linkMapaReal}" target="_blank" style="display:block; width:28px; height:28px; line-height:28px; font-size:14px; font-weight:bold; color:#1E5128; text-decoration:none;">&#128205;</a>
                </td>
                ` : ''}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
` + wrapperEnd;
    }
}

function extractBodyContent(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.innerHTML;
}

function getFormValues() {
    return {
        nome: document.getElementById('input-nome').value || 'NOME DO COLABORADOR',
        cargo: document.getElementById('input-cargo').value || 'Cargo',
        telefone: document.getElementById('input-telefone').value,
        email: document.getElementById('input-email').value,
        site: document.getElementById('input-site').value,
        endereco: document.getElementById('input-endereco').value,
        logoSize: parseInt(document.getElementById('input-logo-size').value) || 140,
        fontSize: parseInt(document.getElementById('input-font-size').value) || 19
    };
}

function updatePreview() {
    const modelo = document.getElementById('input-modelo').value;
    const data = getFormValues();
    
    document.getElementById('display-logo-size').textContent = data.logoSize + 'px';
    document.getElementById('display-font-size').textContent = data.fontSize + 'px';

    const html = getHTML(modelo, data.nome, data.cargo, data.telefone, data.email, data.site, data.endereco, data.logoSize, data.fontSize);
    document.getElementById('preview-container').innerHTML = html;
}

function renderGallery() {
    const gallery = document.getElementById('gallery-container');
    const data = getFormValues();

    let galleryHTML = '';
    const modelosNomes = {
        '1': 'Modelo 1: Padrão Corp. Duas Colunas',
        '2': 'Modelo 2: Minimalista (Clean com Logo Lateral)',
        '3': 'Modelo 3: Compacto em Barra Horizontal (Claro)',
        '4': 'Modelo 4: Etiqueta (Fundo Claro)',
        '5': 'Modelo 5: Etiqueta (Fundo Verde)',
        '6': 'Modelo 6: Minimalista Dark (Fundo Escuro)',
        '7': 'Modelo 7: Compacto em Barra Horizontal (Verde)',
        '8': 'Modelo 8: Moderno Horizontal (Claro)',
        '9': 'Modelo 9: Moderno Horizontal (Escuro)'
    };

    for (let i = 1; i <= 9; i++) {
        const htmlString = getHTML(i.toString(), data.nome, data.cargo, data.telefone, data.email, data.site, data.endereco, data.logoSize, data.fontSize);
        const bodyContent = extractBodyContent(htmlString);
        
        galleryHTML += `
            <div class="gallery-card">
                <div class="gallery-card-header">
                    <h3>${modelosNomes[i.toString()]}</h3>
                    <button onclick="copySpecificModel(${i})" class="btn-copy-small">Copiar Assinatura</button>
                </div>
                <div class="gallery-card-body">
                    ${bodyContent}
                </div>
            </div>
        `;
    }
    
    gallery.innerHTML = galleryHTML;
}

function copySpecificModel(modeloId) {
    const data = getFormValues();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = getHTML(modeloId.toString(), data.nome, data.cargo, data.telefone, data.email, data.site, data.endereco, data.logoSize, data.fontSize);
    document.body.appendChild(tempDiv);

    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Assinatura do Modelo ' + modeloId + ' copiada! Cole no seu sistema ou Outlook com Ctrl+V.');
    } catch(err) {
        alert('Erro ao copiar. Selecione manualmente e aperte Ctrl+C.');
    }
    window.getSelection().removeAllRanges();
    document.body.removeChild(tempDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sig-form');
    if (form && !document.getElementById('input-modelo')) {
        const div = document.createElement('div');
        div.className = 'form-group checkbox-group';
        div.style.background = '#e8f0fe';
        div.style.borderColor = '#b8d0fc';
        div.innerHTML = `
            <label style="color:#1a73e8; font-size:13px; margin-bottom:5px;">Escolha o Modelo de Assinatura:</label>
            <select id="input-modelo" style="width:100%; padding:8px; border-radius:4px; border:1px solid #ccc; font-weight:bold; color:#1E5128;">
                <option value="1">Modelo 1: Padrão Corp. Duas Colunas (Com QR Code)</option>
                <option value="2">Modelo 2: Minimalista (Clean com Logo Lateral)</option>
                <option value="3">Modelo 3: Compacto em Barra Horizontal (Claro)</option>
                <option value="4">Modelo 4: Etiqueta (Horizontal Fundo Claro)</option>
                <option value="5">Modelo 5: Etiqueta (Horizontal Fundo Verde)</option>
                <option value="6">Modelo 6: Minimalista Dark (Fundo Escuro)</option>
                <option value="7">Modelo 7: Compacto em Barra Horizontal (Verde)</option>
                <option value="8">Modelo 8: Moderno Horizontal (Claro)</option>
                <option value="9">Modelo 9: Moderno Horizontal (Escuro)</option>
            </select>
        `;
        form.insertBefore(div, form.firstChild);
        document.getElementById('input-modelo').addEventListener('change', updatePreview);
    }

    const btnToggleGallery = document.getElementById('btn-toggle-gallery');
    const previewContainer = document.getElementById('preview-container');
    const galleryContainer = document.getElementById('gallery-container');
    const previewTitle = document.getElementById('preview-title');

    if (btnToggleGallery) {
        btnToggleGallery.addEventListener('click', () => {
            const isGalleryOpen = galleryContainer.style.display === 'none' || galleryContainer.style.display === '';
            
            if (isGalleryOpen) {
                renderGallery();
                document.body.classList.add('gallery-open'); // Ativa o modo tela cheia
                previewContainer.style.display = 'none';
                galleryContainer.style.display = 'flex'; // Mudou para flex
                btnToggleGallery.textContent = 'Voltar para Edição';
                btnToggleGallery.style.background = '#333333';
                previewTitle.textContent = 'Galeria de Modelos (Tela Cheia)';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.body.classList.remove('gallery-open'); // Desativa o modo tela cheia
                galleryContainer.style.display = 'none';
                previewContainer.style.display = 'block';
                btnToggleGallery.textContent = 'Ver Todos os Modelos';
                btnToggleGallery.style.background = '#4E9F3D';
                previewTitle.textContent = 'Pré-visualização da Assinatura';
            }
        });
    }

    updatePreview();
});

document.getElementById('sig-form').addEventListener('input', () => {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer && galleryContainer.style.display === 'flex') {
        renderGallery();
    } else {
        updatePreview();
    }
});

document.getElementById('btn-copy').addEventListener('click', () => {
    const modelo = document.getElementById('input-modelo').value;
    copySpecificModel(modelo);
});

document.getElementById('btn-download').addEventListener('click', () => {
    const modelo = document.getElementById('input-modelo').value;
    const data = getFormValues();
    
    const html = getHTML(modelo, data.nome, data.cargo, data.telefone, data.email, data.site, data.endereco, data.logoSize, data.fontSize);
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    const safeName = data.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '_');
    a.download = "assinatura_" + safeName + "_mod" + modelo + ".html";
    a.click();
    URL.revokeObjectURL(url);
});

updatePreview();