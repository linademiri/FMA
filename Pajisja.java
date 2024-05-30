public class Pajisja {
    private String numeriSerik;
    private String prodhuesi;
    private int voltazhi;
    private char kategoriaShpenzuese;

    public Pajisja(String numeriSerik, String proshuesi, int voltazhi, char kategoriaShpenzuese) {
        this.numeriSerik = numeriSerik;
        this.prodhuesi = proshuesi;
        this.voltazhi = voltazhi;
        this.kategoriaShpenzuese = kategoriaShpenzuese;
    }

    public String getnumeriSerik() {
        return numeriSerik;
    }

    public String getprodhuesi() {
        return prodhuesi;
    }

    public int getvoltazhi() {
        return voltazhi;
    }

    public char getkategoriaShpenzuese() {
        return kategoriaShpenzuese;
    }

    public void setprodhuesi(String prodhuesi) {
        this.prodhuesi = prodhuesi;
    }

    public void setvoltazhi(int voltazhi) {
        this.voltazhi = voltazhi;
    }

    public void setkategoriaShpenzuese(char kategoriaShpenzuese) {
        this.kategoriaShpenzuese = kategoriaShpenzuese;
    }

    @Override
    public String toString() {
        return numeriSerik + ":" + prodhuesi + voltazhi + "-" + kategoriaShpenzuese;
    }

    @Override
    public boolean equals(Object obj) {
        // if (obj instanceof Pajisja) {
        // Pajisja p = (Pajisja) obj;
        // if (p.getnumeriSerik() == numeriSerik) {
        // return true;
        // }
        // }
        // return false;
        return obj instanceof Pajisja ? ((Pajisja) obj).getnumeriSerik().equals(numeriSerik) : false;

    }

}
