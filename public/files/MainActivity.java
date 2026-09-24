package com.fastlink.accounts;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().getDecorView().setLayoutDirection(android.view.View.LAYOUT_DIRECTION_RTL);
    }
}