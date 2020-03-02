const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    name: 'image',
    description: "Shows the image of the requested item!",
    execute(message, args)
    {
        if(!args[1]) return message.reply('error please define what you want an image of!')
        {
                    
            if(args[1] === 'nude')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else if(args[1] === 'porn')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else if(args[1] === 'sexy')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else if(args[1] === 'hentai')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else if(args[1] === 'pussy')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else if(args[1] === 'pennis')
            {
                return message.reply('you are not allowed to search these, are you?')
            }
            else
            {
            var search = args.slice(1).join(" ");
            image(message, search);
            }
        }
    }
}





function image(message, search)
{
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) 
        {
            return;
        }

        $ = cheerio.load(responseBody);
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) 
        {
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}