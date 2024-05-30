public class Kafsha {
    private String lloji;
    private String emri;
    private int mosha;

    public Kafsha(String lloji, String emri, int mosha) {
        this.lloji = lloji;
        this.emri = emri;
        this.mosha = mosha;
    }

    public String getlloji() {
        return lloji;
    }

    public String getemri() {
        return emri;
    }

    public void setemri(String emri) {
        this.emri = emri;
    }

    public int getmosha() {
        return mosha;
    }

    public void setmosha(int mosha) {
        this.mosha = mosha;
    }

    public String toString() {
        return lloji + "-" + emri + "ka moshen" + mosha;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Kafsha) {
            Kafsha k = (Kafsha) obj;
            if (k.getlloji() == lloji) {
                return true;
            }
        }
        return false;
    }
}
