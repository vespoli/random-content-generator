/* Random JS Object Generator
builds an array of json objects using the following variables

integer $incr - increment, starting from 1
integer $randInt(a,b) - random integer from a to b
boolean $bool - random true/false
string $firstName/$lastName - random (1 of ~200) name/surname (first names come frome us census bureau 2008, last are top ~200 from facebook)
string $company - random company name 1 of ~100 (came from most patent filings under technology - forget year)
string $phone - random phone number - NEEDS WORK
string $email - random email, generated base on $firstName and $company - NEEDS WORK
string $date - random date - TIMESTAMP
integer $repeat:n - repeats object n times in array - allow for child objects (recursive)
usage:
	"friends": [
		"$repeat:3",
		{
			"id":"$incr",
			"name": "$firstName $lastName",
			"phone": "$phone"
		}
	],
	
Example usage:
var randomObj = {
	"serialNo": "$randInt(19999999,89999999)",
	"owner": "$company",
	"document": "New",
	"revisedDate": "$date",
	"queueDate": "$date",
	"noteCount": "$randInt(0,12)",
	"statusDesc": "Non-Final",
	"statusDate": "$date",
	"assignedDate": "$date",
	"daysOld": "$randInt(0,30)",
	"daysAssigned": "$randInt(0,14)",
	"daysOverdue": "$randInt(0,7)",
	"officeId": "$randInt(101,970)",
	"attorneyName": "$firstName $lastName"
}

var myData = randomJson.get(randomObj,4);

console.log(myData);

*/ 
 
var rndFirst = ['Samson', 'Yadiel', 'Jayvon', 'Reilly', 'Sheldon', 'Abdullah', 'Jagger', 'Thaddeus', 'Case', 'Kyson', 'Lamont', 'Chaz', 'Makhi', 'Jan', 'Marques', 'Oswaldo', 'Donavan', 'Keyon', 'Kyan', 'Simeon', 'Trystan', 'Andreas', 'Dangelo', 'Landin', 'Reagan', 'Turner', 'Arnav', 'Brenton', 'Callum', 'Jayvion', 'Bridger', 'Sammy', 'Deegan', 'Jaylan', 'Lennon', 'Odin', 'Abdiel', 'Jerimiah', 'Eliezer', 'Bronson', 'Cornelius', 'Pierre', 'Cortez', 'Baron', 'Carlo', 'Carsen', 'Fletcher', 'Izayah', 'Kolten', 'Damari', 'Hugh', 'Jensen', 'Yurem', 'Raina', 'Mariela', 'Ariella', 'Bria', 'Kamari', 'Monique', 'Ashleigh', 'Reina', 'Alia', 'Ashanti', 'Lara', 'Lilia', 'Justine', 'Leia', 'Maribel', 'Abigayle', 'Tiara', 'Alannah', 'Princess', 'Sydnee', 'Kamora', 'Paityn', 'Payten', 'Naima', 'Gretchen', 'Heidy', 'Nyasia', 'Livia', 'Marin', 'Shaylee', 'Maryjane', 'Laci', 'Nathalia', 'Azaria', 'Anabel', 'Chasity', 'Emmy', 'Izabelle', 'Denisse', 'Emelia', 'Mireya', 'Shea', 'Amiah', 'Dixie', 'Maren', 'Averi', 'Esperanza', 'Micaela', 'Selina', 'Alyvia', 'Chana', 'Avah', 'Donna', 'Kaylah', 'Ashtyn', 'Karsyn', 'Makaila', 'Shayna', 'Essence', 'Leticia', 'Miya', 'Rory', 'Desirae', 'Kianna', 'Laurel', 'Neveah', 'Amaris', 'Hadassah', 'Dania', 'Hailie', 'Jamiya', 'Kathy', 'Laylah', 'Riya', 'Diya', 'Carleigh', 'Iyana', 'Kenley', 'Sloane', 'Elianna'],
		rndLast = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres', 'Parker', 'Collins', 'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley'],
    rndCompanies = ['Affymax Technologies N.V.', 'Agency Of Industrial Science And Technology ', 'Agricultural Genetics Co., Ltd.', 'Ajinomoto Co. Inc.', 'Akzo Nobel Bv', 'Amano Pharmaceutical Co., Ltd', 'Amersham International Ltd.', 'Basf Ag', 'Bayer Ag', 'Behringwerke Ag ', 'Biotech Australia Pty. Ltd. And Csiro  ', 'Boehringer Mannheim Gmbh ', 'Canada National Research Council', 'Canadian Department Of Agriculture And Agri-food ', 'Canadian National Research Council And Forestry ', 'Canadian Patents And Development Ltd.', 'Canon Kk', 'Centre National De La Recherche Scientifique ', 'Chemo-sero-therapeutic Research Inst.', 'Ciba-geigy Ag', 'Clariant Finance Ltd.', 'Commonwealth Scientific And Industrial Research Org. (Csiro)', 'Daikin Industries Limited', 'Degussa Ag', 'France Commissariat A Lenergie Atomique', 'Gist-brocades N.V.', 'Hayashibara Seibutsu Kagaku Kenkyujo K. K.', 'Henkel & Cie Gmbh', 'Hitachi Chemical Co., Ltd. ', 'Hoechst Japan Ltd.', 'Hoffmann-la Roche Inc. ', 'Imperial Chemical Industries Plc', 'Individual Inventor(S)', 'Inst. Of Physical And Chemical Research (Saitama)', 'Institut Merieux', 'Institut National De La Recherche Agronomique (Inra)', 'Institut National De La Sante Et De La Recherche Medicale', 'Institut Pasteur', 'International Flower Developments Pty., Ltd. ', 'Japan Ministry Of Agriculture, Forestry And Fisheries ', 'Japan Tobacco Inc.', 'Kao Corp. ', 'Kikkoman Corp. ', 'Kirin Brewery Co., Ltd. ', 'Kumiai Chemical Industry Co., Ltd.', 'Kyowa Hakko Kogyo Co., Ltd', 'Max-planck Institut', 'Mcgill University', 'Medical Research Council Ltd. ', 'Meiji Seika Kaisha Ltd.', 'Mitsubishi Chemical Corp.', 'Mitsui Toatsu Chemicals Inc.', 'Mogen International N.V.', 'National Research Development Corp. (Uk)', 'National Science Counsil Of R.O.C. ', 'Nestec, S.A.', 'Nippon Zeon Co., Ltd. ', 'Nissan Chemical Industries, Ltd.', 'Novartis Ag ', 'Novo Nordisk Biotech, Inc. ', 'Novo-nordisk A/S ', 'Pharming B.V.', 'Plant Genetic Systems', 'Public Health Research Inst. Of Nyc', 'Queens University ', 'Quest International Flavors And Food Ingredients Co.', 'Rhone-poulenc Rorer, S.A.', 'Rhone-poulenc S.A.', 'Rijksuniversiteit Leiden ', 'Rikagaku Kenkyusho ', 'Roussel-uclaf', 'Sagami Chemical Research Center ', 'Sandoz Ltd.', 'Sapporo Breweries Ltd.', 'Schering Ag ', 'Seminis Vegetable Seeds, Inc.', 'Shimadzu Corp. ', 'Shin-etsu Bio, Inc. ', 'Shin-etsu Chemical Co., Ltd. ', 'Shionogi And Co., Ltd. ', 'Sumitomo Chemical Co., Ltd.', 'Suntory Ltd.', 'Takara Shuzo Co., Ltd.', 'Takeda Chemical Industries, Ltd. ', 'Toyo Boseki K. K.', 'Transgene S.A.', 'U.S. Department Of Agriculture', 'U.S. Department Of Energy', 'U.S. Health And Human Services', 'U.S. Of America Government', 'Unilever Patent Holdings B.V.', 'Universite De Montreal ', 'University  Of British Columbia', 'University  Of Guelph', 'University  Of Saskatchewan', 'Visible Genetics Inc. ', 'Yeda Research And Development Co., Ltd.', 'Yissum Research Development Co., Hebrew University Of Jerusalem', 'Zenco Ltd.', 'Zeneca Ltd.']
 
randomJson = {
	//default object 
	dObj : {
		"id": "$incr",
		"age": "$randInt(-18,65)",
		"admin": "$bool",
		"name": "$firstName $lastName",
		"company": "$company",
		"phone": "$phone",
		"email": "$email",
		"registerDate": "$date",
		"contacts": [
			"$repeat:3",
			{
				"id":"$incr",
				"name": "$firstName $lastName",
				"phone": "$phone"
			}
		],
		"foo": "bar"
	},
  get: function (obj,count) {
		//console.log(this.dObj);
		obj = obj || this.dObj;
		count = count || 10;
	  try {
	      this.json = obj; //JSON.parse(obj)
	  } catch (a) {
	  	console.log("Error: " + a.message);
	    return;
	  }
	  //console.log(this.parseArray(this.json, count));
	  return this.parseArray(this.json, count);
	},
  transliterate: function (a) {
      for (var c = "A B V G D E ZH Z I Y K L M N O P R S T U F H C CH SH SCH ' Y ' E YU YA a b v g d e zh z i y k l m n o p r s t u f h c ch sh sch ' y ' e yu ya e e".split(" "), b = "", d = 0; d < a.length; ++d) var e = a.charCodeAt(d),
          b = b + (1025 == e ? "E" : 1040 <= e ? c[e - 1040] : a[d]);
      return b.replace("'", "")
  },
  clone: function (a) {
      if (!a || "object" !== typeof a) return a;
      var c = "function" === typeof a.pop ? [] : {},
          b, d;
      for (b in a) a.hasOwnProperty(b) && (d = a[b], c[b] = d && "object" === typeof d ? this.clone(d) : d);
      return c;
  },
  getObjectLength: function (a) {
      if (!Object.keys) Object.keys = function (a) {
          var b = [],
              d;
          for (d in a) Object.prototype.hasOwnProperty.call(a, d) && b.push(d);
          return b
      };
      return Object.keys(a).length;
  },
  parseArray: function (a, c) {
      for (var b = [], d = 1; d <= c; d++) b.push(this.parseObject(a, d));
      return b;
  },
  parseVars: function (a, c) {
      var b = /\$firstName/g,
          d = /\$lastName/g,
          e = /\$company/g,
          h = /\$phone/g,
          j = /\$email/g,
          l = /\$bool/,
          m = /^\$incr$/,
          k = /\$incr/,
          f = /^\$randInt\((-?\d*)\,(\d*)\)$/,
          i = /\$randInt\((-?\d*)\,(\d*)\)/,
          n = /\$date/,
          g = /\$repeat\:(\d*)/;
      if (a instanceof Array) if (f = g.test(a[0])) i = g.exec(a[0])[1], a.shift(), a = this.parseArray(a[0], f ? i : a.length);
      else for (f = 0; f < a.length; f++) a[f] = this.parseVars(a[f], f);
      else "object" == typeof a ? a = this.parseObject(a, 0) : (b.test(a) && (a = a.replace(b, rndFirst[this.random])), d.test(a) && (a = a.replace(d, rndLast[this.random])), e.test(a) && (a = a.replace(e, rndCompanies[this.random])), h.test(a) && (a = a.replace(h, "+7095" + Math.random().toFixed(7).split(".")[1])), j.test(a) && (a = a.replace(j, (this.transliterate(rndFirst[this.random]) + "@" + rndCompanies[this.random] + ".com").toLowerCase())), l.test(a) && (a = Math.floor(2 * Math.random()) ? !0 : !1), k.test(a) && (a = m.test(a) ? c : a.replace(k, c)), i.test(a) && (g = i.exec(a), g = Math.round(g[1] - 0.5 + Math.random() * (g[2] - g[1] + 1)), a = f.test(a) ? g : a.replace(i, g)), n.test(a) && (f = new Date, f.setTime(f.getTime() * Math.random()), a = f.toUTCString()));
      return a;
  },
  parseObject: function (a, c) {
      this.random = Math.floor(100 * Math.random());
      var a = this.clone(a),
          b;
      for (b in a) a[b] = this.parseVars(a[b], c);
      return a;
  }
};


