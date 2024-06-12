public class dyqani {
    private String emri;
    Pajisja[] pajisjet;
    private int index = 0;

    public dyqani(String emri, int nr) {
        this.emri = emri;
        pajisjet = new Pajisja[nr];
    }

    public boolean ekziston(Pajisja p) {
        for (int i = 0; i < index; i++) {
            if (pajisjet[i].equals(p)) {
                return true;
            }
        }
        return false;
    }

    public void shtiPajisjen(Pajisja p) {
        if (ekziston(p)) {
            System.out.println("Pajisja egziston");
            return;
        }
        if (index >= pajisjet.length) {
            System.out.println("Nuk ka vend ne varg");
            return;
        }
        pajisjet[index++] = p;
        System.out.println("Pajisja" + p + "u shtua me sukses");
    }

    public void shtyPajisjet() {
        for (int i = 0; i < index; i++) {

            System.out.println(pajisjet[i]);
        }
    }

    public static void main(String[] args) {
        dyqani d = new dyqani("Neptun", 50);
        Pajisja p1 = new Pajisja("111-aaa", "Samsung", 220, 'F');
        Pajisja p2 = new Pajisja("111-aaa", "Lenovo", 220, 'F');
        Pajisja p3 = new Pajisja("111-aaa", "Samsung", 220, 'F');
        Pajisja p4 = new Pajisja("111-aaa", "Lenovo", 220, 'F');
        Pajisja p5 = new Pajisja("111-aaa", "Samsung", 220, 'L');

        d.shtiPajisjen(p1);
        d.shtiPajisjen(p2);
        d.shtiPajisjen(p3);
        d.shtiPajisjen(p4);
        d.shtiPajisjen(p5);
        System.out.println(d.ekziston(p2));
    }
}

public class Shteti {
    private final String emri;
    private final Qyteti[] qytetet;
    private int numriAktualQyteteve = 0;

    // Konstruktor
    public Shteti(String emri, int numriQyteteve) {
        this.emri = emri;
        this.qytetet = new Qyteti[numriQyteteve];
    }

    public String getEmri() {
        return emri;
    }

    public boolean ekziston(Qyteti qyteti) {
        for (int i = 0; i < numriAktualQyteteve; i++) {
            if (qytetet[i].equals(qyteti)) {
                return true;
            }
        }
        return false;
    }

    public boolean shtoQytetin(Qyteti qyteti) {
        if (!ekziston(qyteti) && numriAktualQyteteve < qytetet.length) {
            qytetet[numriAktualQyteteve++] = qyteti;
            return true;
        }
        return false;
    }

    public void shtypQytetet(char shkronja) {
        for (int i = 0; i < numriAktualQyteteve; i++) {
            if (qytetet[i].getEmri().startsWith(String.valueOf(shkronja))) {
                System.out.println(qytetet[i]);
            }
        }
    }

    public Qyteti[] ktheQytetet(int popullsia) {
        int count = 0;
        for (int i = 0; i < numriAktualQyteteve; i++) {
            if (qytetet[i].getPopullsia() > popullsia) {
                count++;
            }
        }

        if (count == 0) {
            return null;
        }

        Qyteti[] rezultat = new Qyteti[count];
        int index = 0;
        for (int i = 0; i < numriAktualQyteteve; i++) {
            if (qytetet[i].getPopullsia() > popullsia) {
                rezultat[index++] = qytetet[i];
            }
        }
        return rezultat;
    }

    public void fshijQytetet(int popullsia) {
        int index = 0;
        for (int i = 0; i < numriAktualQyteteve; i++) {
            if (qytetet[i].getPopullsia() >= popullsia) {
                qytetet[index++] = qytetet[i];
            }
        }
        while (index < numriAktualQyteteve) {
            qytetet[index++] = null;
        }
        numriAktualQyteteve = index;
    }

    public static void main(String[] args) {
        Shteti kosova = new Shteti("Kosova", 10);

        Qyteti qyteti1 = new Qyteti("001", "Prishtina", 500000);
        Qyteti qyteti2 = new Qyteti("002", "Prizreni", 200000);
        Qyteti qyteti3 = new Qyteti("003", "Peja", 90000);
        Qyteti qyteti4 = new Qyteti("004", "Gjakova", 150000);
        Qyteti qyteti5 = new Qyteti("005", "Mitrovica", 100000);
        Qyteti qyteti6 = new Qyteti("006", "Ferizaj", 80000);
        Qyteti qyteti7 = new Qyteti("007", "Gjilan", 60000);
        Qyteti qyteti8 = new Qyteti("008", "Vushtrri", 70000);
        Qyteti qyteti9 = new Qyteti("009", "Podujeva", 50000);
        Qyteti qyteti10 = new Qyteti("010", "Malisheva", 45000);

        kosova.shtoQytetin(qyteti1);
        kosova.shtoQytetin(qyteti2);
        kosova.shtoQytetin(qyteti3);
        kosova.shtoQytetin(qyteti4);
        kosova.shtoQytetin(qyteti5);
        kosova.shtoQytetin(qyteti6);
        kosova.shtoQytetin(qyteti7);
        kosova.shtoQytetin(qyteti8);
        kosova.shtoQytetin(qyteti9);
        kosova.shtoQytetin(qyteti10);

        Qyteti testQyteti = new Qyteti("003", "Peja", 90000);
        System.out.println("Ekziston qyteti '003 - Peja : 90000'? " + kosova.ekziston(testQyteti));

        System.out.println("Qytetet që fillojnë me shkronjën 'P':");
        kosova.shtypQytetet('P');

        System.out.println("Qytetet me popullsi më të madhe se 100000:");
        Qyteti[] qytetetMbi100000 = kosova.ktheQytetet(100000);
        if (qytetetMbi100000 != null) {
            for (Qyteti qyteti : qytetetMbi100000) {
                System.out.println(qyteti);
            }
        } else {
            System.out.println("Nuk ka qytete me popullsi më të madhe se 100000.");
        }

        kosova.fshijQytetet(50000);
        System.out.println("Qytetet pas fshirjes:");
        for (int i = 0; i < kosova.numriAktualQyteteve; i++) {
            System.out.println(kosova.qytetet[i]);
        }
    }
}
